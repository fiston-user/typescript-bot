import { SlashCommand } from "../types";
import { AddCommand } from "./add";
import { GithubCommand } from "./github";
import { HelloCommand } from "./test";

export const SlashCommands: SlashCommand[] = [HelloCommand, AddCommand, GithubCommand];