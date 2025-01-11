import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About LastBillion - Bridging the Digital Divide',
  description:
    'LastBillion is dedicated to bridging the digital divide and ensuring that the last billion people on Earth have access to the benefits of digital technology.',
  keywords:
    'digital divide, last billion, digital inclusion, connectivity, underserved populations, technology access, global connectivity',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-8">
          About LastBillion: Bridging the Digital Divide
        </h1>
        <p className="text-xl mb-8">
          LastBillion is dedicated to bridging the digital divide and ensuring
          that the last billion people on Earth have access to the benefits of
          digital technology and global connectivity.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Our Digital InclusionOur Digital Inclusion Mission
        </h2>
        <p className="mb-8">
          Our mission is to accelerate digital inclusion for the world&apos;s
          most underserved populations through research, collaboration, and
          innovative technology solutions. We strive to connect the last billion
          people to the digital world, empowering them with access to
          information, education, and economic opportunities.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Why Focus on the Last Billion?
        </h2>
        <p className="mb-8">
          The &apos;Last Billion&apos; refers to the population that remains
          disconnected from the digital world due to various factors such as
          poverty, lack of infrastructure, education gaps, and social or
          political barriers. We believe that by focusing on this group, we can
          create a more equitable and prosperous world for all, bridging the
          digital divide and fostering global connectivity.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Our Digital Inclusion Approach
        </h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>
            Conduct and support research on digital inclusion challenges and
            innovative solutions
          </li>
          <li>
            Facilitate collaboration between organizations, researchers, and
            technologists to address the digital divide
          </li>
          <li>
            Develop and promote tools specifically designed for the last billion
            users to improve digital access
          </li>
          <li>
            Advocate for policies and initiatives that support digital inclusion
            and global connectivity
          </li>
          <li>
            Raise awareness about the importance of connecting the last billion
            to the digital world
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Get Involved in Bridging the Digital Divide
        </h2>
        <p className="mb-6">
          Whether you&apos;re a researcher, humanitarian organization,
          technologist, or simply passionate about digital inclusion, there are
          many ways to contribute to our mission of connecting the last billion.
        </p>
      </main>
      <Footer />
    </div>
  );
}
