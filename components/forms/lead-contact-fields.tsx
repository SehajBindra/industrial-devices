import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LeadContactFieldsProps = {
  idPrefix?: string;
};

export function LeadContactFields({
  idPrefix = "lead",
}: LeadContactFieldsProps) {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-name`}>Name</Label>
        <Input
          id={`${idPrefix}-name`}
          name="name"
          autoComplete="name"
          required
          className="h-11 rounded-xl bg-white"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-company`}>Company name</Label>
        <Input
          id={`${idPrefix}-company`}
          name="company"
          autoComplete="organization"
          required
          className="h-11 rounded-xl bg-white"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-email`}>Email</Label>
        <Input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 rounded-xl bg-white"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-phone`}>WhatsApp Number</Label>
        <Input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="h-11 rounded-xl bg-white"
        />
      </div>
    </>
  );
}
