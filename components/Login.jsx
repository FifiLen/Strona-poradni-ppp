import { signIn, signOut, useSession } from 'next-auth/client';

const LoginPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Witaj, {session.user.name}!</p>
        <button onClick={() => signOut()}>Wyloguj się</button>
      </div>
    );
  }

  return (
    <div>
      <p>Nie jesteś zalogowany.</p>
      <button onClick={() => signIn()}>Zaloguj się</button>
    </div>
  );
};

export default LoginPage;
