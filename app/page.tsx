import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const customHeader = headersList.get('http_x_msisdn');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Header http_x_msisdn</h1>
      {customHeader ? (
        <p>{customHeader}</p>
      ) : (
        <p>Header não encontrado.</p>
      )}
    </main>
  );
}
