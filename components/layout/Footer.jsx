

export default function Footer() {
  return (
<footer className="w-full border-t mt-20 bg-black">
    <div className="max-w-7xl mx-auto px-6 py-12">
    <h2 className="text-xl text-white font-bold">
    Learn Horizon
    </h2>
    <p className="mt-2 text-white">
    Tourism and training services in Rwanda
    </p>
    <p className="text-sm text-white mt-6">
    &copy;{new Date().getFullYear()} Learn Horizon. All rights reserved.
    </p>
    </div>
</footer>

  )
}
