import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-8">
          Research on the Last Billion
        </h1>
        <p className="text-xl mb-8">
          Our research focuses on understanding the challenges faced by the last
          billion people to be digitally connected and developing solutions to
          bridge this gap.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Current Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Digital Literacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Investigating effective methods to improve digital literacy
                among underserved populations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Analyzing barriers to digital infrastructure development in
                remote and rural areas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cultural Barriers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Examining cultural factors that may hinder digital adoption and
                ways to address them.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Economic Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Assessing the economic benefits of digital inclusion for
                individuals and communities.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Get Involved in Research
        </h2>
        <p className="mb-6">
          We welcome researchers, academics, and organizations to contribute to
          our ongoing studies or propose new research initiatives.
        </p>
        <Button size="lg">Submit a Research Proposal</Button>
      </main>
      <Footer />
    </div>
  );
}
