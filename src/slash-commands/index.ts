import { SlashCommand } from "../types";
import { AddCommand } from "./add";
import { HelloCommand } from "./test";

export const SlashCommands: SlashCommand[] = [HelloCommand, AddCommand];