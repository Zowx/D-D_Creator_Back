export class RaceDto {
  name: string;
  description: string;
  traitsId: bigint[];
  subrace_of?: bigint;
}