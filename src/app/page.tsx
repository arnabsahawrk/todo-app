import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen min-w-screen">
      <AddTodo />
      <Todo />
    </main>
  );
}
