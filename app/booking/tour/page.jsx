"use client";

import Container from "@/components/ui/Container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tourSchema } from "@/lib/validations/tourSchema";
import FormField from "@/components/form/FormField";
import { useState } from "react";
import { submitBooking } from "@/lib/api/bookings";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TourBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mounted, setMounted] = useState(false);


  const searchParams = useSearchParams();
  const tourFromUrl = mounted ? searchParams.get("tour") : null;
  console.log("tourSchema:", tourSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      tourName: tourFromUrl || "",
    },
  });
 useEffect(() => {
  if (tourFromUrl) {
    reset((prev) => ({
      ...prev,
      tourName: tourFromUrl,
    }));
  }
  
}, [tourFromUrl]);
useEffect(() => {
  setMounted(true);
}, []);
  const onSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitBooking({
        ...data,
        bookingType: "tour",
      });

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F9F9F9] py-24">
      <Container>
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-8">Tour Booking</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* ===== Tour Details ===== */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Tour Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Tour Name / Destination"
                  name="tourName"
                  register={register}
                  error={errors.tourName}
                  readOnly={!!tourFromUrl}
                />

                <FormField
                  label="Travel Date"
                  type="date"
                  name="travelDate"
                  register={register}
                  error={errors.travelDate}
                />

                <FormField
                  label="Number of People"
                  name="people"
                  as="select"
                  register={register}
                  error={errors.people}
                  options={[
                    { label: "1 Person", value: 1 },
                    { label: "2 People", value: 2 },
                    { label: "3 People", value: 3 },
                  ]}
                />
              </div>
            </div>

            {/* ===== Passenger Info ===== */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="First Name"
                  name="firstName"
                  register={register}
                  error={errors.firstName}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  register={register}
                  error={errors.lastName}
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  register={register}
                  error={errors.email}
                />
                <FormField
                  label="Phone"
                  type="tel"
                  name="phone"
                  register={register}
                  error={errors.phone}
                />
              </div>
            </div>

            {/* ===== Special Requests ===== */}
            <FormField
              label="Special Requests"
              name="specialRequests"
              as="textarea"
              register={register}
              error={errors.specialRequests}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#b68a2f] transition
        ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
        `}
            >
              {isSubmitting ? (
                <span className="flex gap-2 items-center">
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  Booking your tour...
                </span>
              ) : (
                "Book Now"
              )}
            </button>
          </form>
          {submitStatus === "success" && (
            <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-semibold">
                ✓ Booking request sent successfully
              </p>

              <p className="text-green-600 text-sm mt-1">
                Our travel team will contact you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-semibold">Booking failed</p>

              <p className="text-red-600 text-sm">
                Please try again or contact support.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
