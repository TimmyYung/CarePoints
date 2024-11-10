import fs from 'fs';
import path from 'path';

export async function GET(req) {
  const filePath = path.join(process.cwd(), 'src/app/(routes)/timtest/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
