import casual from "casual";

export default function mockPublisher({ id }: { id: string }) {
  return {
    id,
    name: casual.company_name,
    email: casual.email,
    phone: casual.phone,
  };
}
