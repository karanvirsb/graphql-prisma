import casual from "casual";

export default function mockLibrary({ id }: { id: number }) {
  return {
    id,
    name: casual.full_name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone,
  };
}
