import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    revalidateTag('time');

    return new Response('Revalidated time cache');
};
