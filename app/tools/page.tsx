import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Inclusion Tools - LastBillion',
  description:
    'Discover and contribute to technology solutions designed specifically for the last billion users to bridge the digital divide and improve global connectivity.',
  keywords:
    'digital inclusion tools, connectivity solutions, offline technology, low-bandwidth apps, inclusive design, digital literacy tools',
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">
          Digital Inclusion Tools for the Last Billion
        </h1>
        <p className="text-xl mb-8">
          Discover and contribute to technology solutions designed specifically
          for the last billion users, aimed at bridging the digital divide and
          improving global connectivity.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Featured Digital Inclusion Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Rahat.io: Digital Financial Inclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A digital cash and voucher assistance tool developed in Nepal,
                bringing digital finance to underserved populations and bridging
                the financial inclusion gap.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More About Rahat.io
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>OfflineEdu: Inclusive Learning Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                An offline-first educational platform that works without
                constant internet connectivity, suitable for remote areas and
                bridging the educational digital divide.
              </p>
              <Button className="mt-4" variant="outline">
                Explore OfflineEdu
              </Button>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Digital Inclusion Development Guidelines
        </h2>
        <p className="mb-6">
          When developing tools for digital inclusion and the last billion,
          consider these key principles:
        </p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>
            Design for low-bandwidth and offline-first scenarios to ensure
            accessibility
          </li>
          <li>
            Prioritize simplicity and intuitive user interfaces for diverse user
            groups
          </li>
          <li>Ensure compatibility with low-end devices to maximize reach</li>
          <li>
            Incorporate multilingual support and localization for global
            usability
          </li>
          <li>
            Implement robust security measures to protect vulnerable users in
            the digital space
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Contribute to Digital Inclusion
        </h2>
        <p className="mb-6">
          Are you a developer or designer interested in creating tools for
          digital inclusion and the last billion? Join our community and
          contribute to existing projects or propose new ideas to bridge the
          digital divide.
        </p>
      </main>
      <Footer />
    </div>
  );
}
