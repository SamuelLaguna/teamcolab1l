import { NextRequest } from "next/server";
import {z} from 'zod';

const createIssueSchema = z.object({
    
})

export function POST(request:NextRequest) {
    const body = request.json()
}