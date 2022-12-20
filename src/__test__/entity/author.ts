import casual from "casual";

export default function mockAuthor({ id }: { id: number }) {
  return {
    id,
    name: casual.full_name,
    email: casual.email,
    image: casual.url,
  };
}
