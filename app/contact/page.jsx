"use client"

import { useState } from "react"
import Container from "@/components/ui/Container"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!data.success) throw new Error(data.error || "Something went wrong")

      setSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>
        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-[#1A1A1A]">Get in Touch</h1>
          <p className="mt-4 text-gray-600">
            Reach out to our travel experts for inquiries, personalized tours, or partnerships.
          </p>
        </div>

        {/* FORM & INFO */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          
          {/* LEFT: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-6"
          >
            {success && (
              <p className="text-green-600 font-semibold">Message sent successfully!</p>
            )}
            {error && <p className="text-red-600 font-semibold">{error}</p>}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C49A3A]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C49A3A]"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C49A3A]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C49A3A] h-40 resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#C49A3A] text-white py-4 rounded-lg font-semibold hover:bg-[#b68a2f] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* RIGHT: Contact Info */}
          <div className="flex flex-col justify-center gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A]">Email</h3>
              <p>horizonlearn57@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A]">Phone</h3>
              <p>+250 788 123 456</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A]">Address</h3>
              <p>Kigali, Rwanda</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A]">Working Hours</h3>
              <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}