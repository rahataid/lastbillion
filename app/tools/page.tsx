import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-8">Tools for the Last Billion</h1>
        <p className="text-xl mb-8">
          Discover and contribute to technology solutions designed specifically for the last billion users.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Rahat.io</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A digital cash and voucher assistance tool developed in Nepal, bringing digital finance to underserved populations.</p>
              <Button className="mt-4" variant="outline">Learn More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>OfflineEdu</CardTitle>
            </CardHeader>
            <CardContent>
              <p>An offline-first educational platform that works without constant internet connectivity, suitable for remote areas.</p>
              <Button className="mt-4" variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Development Guidelines</h2>
        <p className="mb-6">
          When developing tools for the last billion, consider these key principles:
        </p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Design for low-bandwidth and offline-first scenarios</li>
          <li>Prioritize simplicity and intuitive user interfaces</li>
          <li>Ensure compatibility with low-end devices</li>
          <li>Incorporate multilingual support and localization</li>
          <li>Implement robust security measures to protect vulnerable users</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Contribute</h2>
        <p className="mb-6">
          Are you a developer or designer interested in creating tools for the last billion? Join our community and contribute to existing projects or propose new ideas.
        </p>
        <Button size="lg">Join Developer Community</Button>
      </main>
      <Footer />
    </div>
  )
}

