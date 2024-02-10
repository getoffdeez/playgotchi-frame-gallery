import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Let's get started"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmZDcHoeNtWqDdVbJ7r6s58Lp7hAPAe3bTxGZJs1dBt5rK/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Playgotchi',
  description: 'A frame telling the story of Playgotchi',
  openGraph: {
    title: 'Playgotchi',
    description: 'A frame telling the story of Playgotchi',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmZDcHoeNtWqDdVbJ7r6s58Lp7hAPAe3bTxGZJs1dBt5rK/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Playgotchi</h1>
    </>
  );
}