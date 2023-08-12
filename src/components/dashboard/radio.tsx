import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AirlineArabiaLogo from "@/assets/logos/air-arabia.png";
import AirlineCathayPacificLogo from "@/assets/logos/cathay-pacific.png";
import AirlineQantasLogo from "@/assets/logos/qantas.png";

const Airlines = [
  {
    name: "Air Arabia",
    logo: AirlineArabiaLogo,
    code: "G9",
  },
  {
    name: "Cathay Pacific",
    logo: AirlineCathayPacificLogo,
    code: "CX",
  },
  {
    name: "Qantas",
    logo: AirlineQantasLogo,
    code: "QF",
  },
];

export function RadioGroupDashboard() {
  return (
    <RadioGroup
      className="bg-slate-100 p-5 rounded-xl"
      defaultValue="comfortable"
    >
      {Airlines.map((airline) => (
        <div
          className="flex items-center  justify-between space-x-2"
          key={airline.code}
        >
          <Label htmlFor={airline.code}>
            <div className="flex items-center gap-3 justify-between">
              <img
                src={airline.logo}
                alt={airline.name}
                className="w-[24px] h-[24px]"
              />
              <h3>{airline.name}</h3>
            </div>
          </Label>
          <RadioGroupItem value={airline.code} id={airline.code} />
        </div>
      ))}
    </RadioGroup>
  );
}
