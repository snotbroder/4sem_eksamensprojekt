//FOR VERCEL
// export const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// export const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//FOR DEVELOPMENT
const url = "https://cckofydhouffprwkdcpw.supabase.co/rest/v1/";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNja29meWRob3VmZnByd2tkY3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzMzMjEsImV4cCI6MjA2MDU0OTMyMX0.lHyOFxpm9qFmThwVLO2SCLRNnGTsTIaiaF4Zq6zzGYI";

export async function getTest() {
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY", url);
}

//Tilføj data til databasen
export async function addItem(itemData, tableName) {
  let headersList = {
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(`${url}${tableName}`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(itemData),
  });

  //Hvis der sker en fejl i dataen
  // if (!response.ok) {
  //   const errorText = await response.text();
  //   console.error("Error adding data:", errorText);
  // }

  let data = await response.json();
  console.log("Added data:", data);
  return data;
}

//Fetch alle items i databasen function
export async function getAllItems(tableName) {
  const headersList = {
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  //Hent ALT data fra tabellen
  const response = await fetch(`${url}${tableName}?select=*`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  console.log("Fetched items:", data);
  return data;
}

//Slet et selected menu fra databasen
export async function deleteItem(uuid, tableName) {
  let response = await fetch(`${url}${tableName}?uuid=eq.${uuid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "return=representation",
    },
  });

  let data = await response.json();
  console.log("Deleted:", data);
  return data;
}

//Redigér et selected menu fra databasen
export async function editItem(uuid, tableName, updatedData) {
  let response = await fetch(`${url}${tableName}?uuid=eq.${uuid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(updatedData), // Her sender jeg den opdateret data til api'en
  });

  let data = await response.json();
  console.log("Changed:", data);
  return data;
}
