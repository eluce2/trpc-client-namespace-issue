/**
 * This is a Next.js page.
 */
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const resultGood = trpc.anyOtherName.test.useQuery();
  const resultBad = trpc.client.test.useQuery();

  const utils = trpc.useContext();

  if (!resultGood.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      {/**
       * The type is defined and can be autocompleted
       * 💡 Tip: Hover over `data` to see the result type
       * 💡 Tip: CMD+Click (or CTRL+Click) on `text` to go to the server definition
       * 💡 Tip: Secondary click on `text` and "Rename Symbol" to rename it both on the client & server
       */}

      <div>
        <button onClick={() => console.log(utils.anyOtherName.test.getData())}>
          Working Function
        </button>
        <button onClick={() => console.log(utils.client.test.getData())}>
          Broken Function
        </button>
      </div>
    </div>
  );
}

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
