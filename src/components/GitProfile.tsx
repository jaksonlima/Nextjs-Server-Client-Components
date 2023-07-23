interface GitProfileProps {
  username: string;
}

export async function GitProfile({ username }: GitProfileProps) {
  const response = await fetch(`http://api.github.com/users/${username}`);
  const user = await response.json();
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
