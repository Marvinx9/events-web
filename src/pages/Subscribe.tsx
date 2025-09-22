import { useState, type FormEvent } from "react";
import Logo from "/Logo.svg";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(subscriber: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [createSubscriber, { loading, error }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      });

      navigate("/event");
    } catch (err) {
      console.error("Error on create subscriber:", err);
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: "url('/src/assets/blur.png')" }}
    >
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-1.5">
            <img src={Logo} alt="logo of events platform" />
            <h1 className="text-gray-400">| Python Advanced</h1>
          </div>
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Learn the
            <strong className="text-blue-500"> main technologies</strong> of
            today learn<strong className="text-blue-500"> Python</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master one of the most innovative
            technologies on the market, learn how to automate processes and
            stand out from the rest
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Subscribe free</strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Your full name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Secure my Place
            </button>
            {error && (
              <p className="text-red-500 mt-2">
                {error.message.includes("Validation")
                  ? "Fill in the fileds correctly"
                  : "Unexpected error. Try again"}
              </p>
            )}
          </form>
        </div>
      </div>
      <img src="/src/assets/mockup.png" className="mt-10" alt="" />
    </div>
  );
}
