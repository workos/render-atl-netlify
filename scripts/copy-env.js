import * as fs from "node:fs";
import * as path from "node:path";
import { spawn } from "node:child_process";

const envPath = path.resolve(import.meta.dirname, "../.env");
const envExamplePath = path.resolve(import.meta.dirname, "../.env.example");

// check if .env exists
if (fs.existsSync(envPath)) {
	console.log("------------------------------\n");
	console.log("🔒 .env file already exists!\n");
	console.log(
		"If you haven't already updated the `WORKOS_COOKIE_PASSWORD`, get a new secrent by running:\n",
	);
	console.log("openssl rand -base64 32\n");
	console.log("------------------------------");
	process.exit(0);
}

// check if .env.example exists

const secret = await generateSecret();
const env = fs
	.readFileSync(envExamplePath, "utf8")
	.replace(/WORKOS_COOKIE_PASSWORD=.*/, `WORKOS_COOKIE_PASSWORD="${secret}"`);

fs.writeFileSync(path.join(import.meta.dirname, "../.env"), env);

console.log("------------------------------\n");
console.log("🔒 .env file created!\n");
console.log("------------------------------");

async function generateSecret() {
	return new Promise((resolve, reject) => {
		const stdout = [];
		const stderr = [];
		const openSSLProcess = spawn("openssl", ["rand", "-base64", "32"]);
		openSSLProcess.stdout.on("data", (data) => {
			stdout.push(data);
			openSSLProcess.exitCode = 0;
			openSSLProcess.kill();
			resolve(data.toString().trim());
		});

		openSSLProcess.stderr.on("data", (data) => {
			stderr.push(data);
		});

		openSSLProcess.on("error", (error) => {
			reject(error);
		});
	});
}
