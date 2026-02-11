'use client';

import { useEffect, useState } from 'react';

// This component safely renders a date on the client side to avoid
// hydration mismatches between the server and client.
export function ClientSideFormattedDate({ dateString }: { dateString: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient
        ? new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : null}
    </>
  );
}
