import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";


const schema = defineSchema({
    ...authTables,
    workspace: defineTable({
        name: v.string(),
        userId: v.id("users"),
        joinCode: v.string(),
    }),
    members: defineTable({
        userId: v.id("users"),
        workspaceId: v.id("workspace"),
        role: v.union(v.literal("admin"), v.literal("member")),
    }),
    .index("by_user_id", ["userId"]),
    .index("by_workspace_id", ["workspaceId"]),
    .index("by-workspace-id-user-id", ["workspaceId", "userId"]),
});

export default schema;