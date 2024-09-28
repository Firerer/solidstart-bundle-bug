import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { createClient } from "@libsql/client-wasm";
import { createResource, For, Suspense } from "solid-js";

export default function Home() {
  const client = createClient({
    url: ":memory:",
  });
  client.execute(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)"
  );
  client.execute("INSERT INTO users (name) VALUES ('John')");

  console.log(client);
  const [users, _] = createResource(() =>
    client.execute("SELECT * FROM users")
  );
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <div>{JSON.stringify(users()?.toJSON())}</div>
    </main>
  );
}
