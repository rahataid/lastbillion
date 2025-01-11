import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-8">About LastBillion</h1>
        <p className="text-xl mb-8">
          LastBillion is dedicated to bridging the digital divide and ensuring that the last billion people on Earth have access to the benefits of digital technology.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-8">
          Our mission is to accelerate digital inclusion for the world's most underserved populations through research, collaboration, and innovative technology solutions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why the Last Billion?</h2>
        <p className="mb-8">
          The "Last Billion" refers to the population that remains disconnected from the digital world due to various factors such as poverty, lack of infrastructure, education gaps, and social or political barriers. We believe that by focusing on this group, we can create a more equitable and prosperous world for all.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Conduct and support research on digital inclusion challenges and solutions</li>
          <li>Facilitate collaboration between organizations, researchers, and technologists</li>
          <li>Develop and promote tools specifically designed for the last billion users</li>
          <li>Advocate for policies and initiatives that support digital inclusion</li>
          <li>Raise awareness about the importance of connecting the last billion</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-6">
          Whether you're a researcher, humanitarian organization, technologist, or simply passionate about digital inclusion, there are many ways to contribute to our mission.
        </p>
        <Button size="lg">Join Our Efforts</Button>
      </main>
      <Footer />
    </div>
  )
}

