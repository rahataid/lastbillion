import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaborate for Digital Inclusion - LastBillion',
  description:
    "Join LastBillion's efforts to bridge the digital divide. Collaborate with humanitarian organizations, tech companies, and researchers to connect the last billion.",
  keywords:
    'digital inclusion collaboration, humanitarian technology, digital divide partnerships, connectivity initiatives, global digital access',
};

export default function CollaboratePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">
          Collaborate for Digital Inclusion Impact
        </h1>
        <p className="text-xl mb-8">
          Join forces with humanitarian organizations, tech companies, and
          researchers to create meaningful change in bridging the digital divide
          for the last billion.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Digital Inclusion Collaboration Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Joint Digital Access Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Partner with other organizations to implement digital inclusion
                initiatives on the ground in underserved communities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Digital Divide Resource Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Share knowledge, tools, and resources to maximize impact and
                avoid duplication of efforts in bridging the digital divide.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Digital Inclusion Funding Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Connect with potential funders or co-apply for grants to support
                digital inclusion projects for the last billion.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Connectivity Expert Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Join our network of experts to provide consultation and guidance
                on various digital inclusion projects worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Digital Inclusion Success Stories
        </h2>
        <p className="mb-6">
          Learn about successful collaborations that have made a significant
          impact on digital inclusion:
        </p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Rural Connectivity Project in Nepal with Rahat.io</li>
          <li>Digital Literacy Program in Sub-Saharan Africa</li>
          <li>Mobile Banking Initiative for Remote Communities in India</li>
        </ul>

        <Button size="lg">Propose a Digital Inclusion Collaboration</Button>
      </main>
      <Footer />
    </div>
  );
}
