import { useRouter } from "next/router";

export default function userDetail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);

  return (
    <div>
      <h2>Details</h2>
    </div>
  );
}
