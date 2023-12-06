interface EnvConfig {
  siteUrl: string;
  backendUrl: string;
}

export const envConfig: EnvConfig = {
  siteUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL || "http://localhost:3000",
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "",
};

