//FOR VERCEL
// export const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// export const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//FOR DEVELOPMENT
const url = "https://cckofydhouffprwkdcpw.supabase.co/rest/v1/";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNja29meWRob3VmZnByd2tkY3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzMzMjEsImV4cCI6MjA2MDU0OTMyMX0.lHyOFxpm9qFmThwVLO2SCLRNnGTsTIaiaF4Zq6zzGYI";

export async function getTest() {
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY", url);
}

export async function addMenu(menuData) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(`${url}menu-database`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(menuData),
  });

  let data = await response.json();
  console.log("Det virkede", data);
  return data;
}
