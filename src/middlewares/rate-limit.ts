import rateLimit from "koa-ratelimit";

export default (_config: any, { strapi }: any) => {
  return rateLimit({
    driver: "memory", // استخدم redis في الإنتاج
    db: new Map(),
    duration: 10 * 60 * 1000, // 10 دقائق
    max: 3, // 3 محاولات
    errorMessage: "عدد المحاولات كبير، حاول لاحقًا",
    id: (ctx: { request: { path: string; ip: string } }) => {
      const path = ctx.request.path;

      // ✅ فقط للفورم والحجوزات
      if (
        path.startsWith("/api/messages") ||
        path.startsWith("/api/bookings")
      ) {
        return ctx.request.ip;
      }

      return false; // ❌ تجاهل باقي الـ routes
    },
  });
};
