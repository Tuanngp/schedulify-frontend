"use client";

import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  BarChart2,
  MessageSquare,
  Zap,
  Clock,
  TrendingUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Star,
  CheckCircle2,
  Play,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Lên lịch thông minh",
    description:
      "Dễ dàng lên lịch và quản lý nội dung cho nhiều nền tảng xã hội khác nhau trong một giao diện duy nhất.",
  },
  {
    icon: BarChart2,
    title: "Phân tích chi tiết",
    description:
      "Theo dõi và phân tích hiệu suất bài đăng với các chỉ số chi tiết và báo cáo chuyên sâu.",
  },
  {
    icon: MessageSquare,
    title: "Quản lý tương tác",
    description:
      "Tập trung quản lý và phản hồi các tương tác từ người dùng trên tất cả các nền tảng.",
  },
  {
    icon: Zap,
    title: "Tối ưu thời gian đăng",
    description:
      "AI phân tích và đề xuất thời điểm đăng bài tối ưu để tăng tương tác cho từng nền tảng.",
  },
  {
    icon: Clock,
    title: "Tiết kiệm thời gian",
    description:
      "Tự động hóa quy trình đăng bài, giúp bạn tiết kiệm hàng giờ làm việc mỗi tuần.",
  },
  {
    icon: TrendingUp,
    title: "Tăng hiệu quả",
    description:
      "Tối ưu chiến lược content với các công cụ phân tích và gợi ý cải thiện.",
  },
];

const platforms = [
  { icon: Facebook, name: "Facebook" },
  { icon: Instagram, name: "Instagram" },
  { icon: Twitter, name: "Twitter" },
  { icon: Linkedin, name: "LinkedIn" },
  { icon: Youtube, name: "YouTube" },
];

const pricing = [
  {
    name: "Free",
    price: "0",
    description: "Cho người mới bắt đầu",
    features: [
      "1 kênh xã hội",
      "5 bài đăng/tháng",
      "Phân tích cơ bản",
      "Email support",
      "Lên lịch đăng bài",
      "Tối ưu thời gian đăng",
    ],
  },
  {
    name: "Pro",
    price: "199.000",
    description: "Cho cá nhân và doanh nghiệp nhỏ",
    features: [
      "5 kênh xã hội",
      "100 bài đăng/tháng",
      "Phân tích chuyên sâu",
      "Hỗ trợ 24/7",
      "Quản lý tương tác",
      "Báo cáo tuỳ chỉnh",
      "Tối ưu nội dung bằng AI",
      "Xuất báo cáo PDF",
    ],
  },
  {
    name: "Enterprise",
    price: "499.000",
    description: "Cho doanh nghiệp lớn",
    features: [
      "Không giới hạn kênh xã hội",
      "Không giới hạn bài đăng",
      "Phân tích chuyên sâu",
      "Hỗ trợ ưu tiên 24/7",
      "API tích hợp",
      "Quản lý team không giới hạn",
      "Tối ưu nội dung bằng AI",
      "White-label reports",
      "Đào tạo riêng",
      "SLA cam kết",
    ],
  },
];

const faqs = [
  {
    question: "Schedulify có những tính năng gì nổi bật?",
    answer:
      "Schedulify cung cấp nhiều tính năng như lên lịch đăng bài tự động, phân tích hiệu suất, quản lý tương tác, và đề xuất thời gian đăng tối ưu bằng AI.",
    icon: Calendar,
  },
  {
    question: "Tôi có thể dùng thử miễn phí không?",
    answer:
      "Có, bạn có thể đăng ký tài khoản Free để dùng thử các tính năng cơ bản của Schedulify.",
    icon: Star,
  },
  {
    question: "Làm sao để nâng cấp lên Premium?",
    answer:
      "Bạn có thể dễ dàng nâng cấp lên Premium trong phần Cài đặt > Gói dịch vụ của tài khoản.",
    icon: TrendingUp,
  },
  {
    question: "Schedulify hỗ trợ những nền tảng nào?",
    answer:
      "Hiện tại Schedulify hỗ trợ Facebook, Instagram, Twitter, LinkedIn và YouTube.",
    icon: Facebook,
  },
  {
    question: "Làm thế nào để bắt đầu sử dụng Schedulify?",
    answer:
      "Chỉ cần đăng ký tài khoản, kết nối các kênh xã hội của bạn và bắt đầu lên lịch đăng bài. Chúng tôi có hướng dẫn chi tiết và đội ngũ hỗ trợ 24/7.",
    icon: Play,
  },
  {
    question: "Có giới hạn số lượng tài khoản mạng xã hội không?",
    answer:
      "Gói Free cho phép kết nối tối đa 3 tài khoản. Gói Premium không giới hạn số lượng tài khoản và mạng xã hội có thể kết nối.",
    icon: Linkedin,
  },
];

const testimonials = [
  {
    content:
      "Schedulify giúp tôi tiết kiệm rất nhiều thời gian trong việc quản lý mạng xã hội. Giao diện dễ sử dụng và tính năng phân tích rất hữu ích.",
    author: "Nguyễn Văn A",
    role: "Marketing Manager",
    company: "Tech Company",
  },
  {
    content:
      "Từ khi sử dụng Schedulify, hiệu quả social media marketing của chúng tôi tăng đáng kể. Đặc biệt là tính năng đề xuất thời gian đăng bài tối ưu.",
    author: "Trần Thị B",
    role: "Social Media Director",
    company: "Agency XYZ",
  },
  {
    content:
      "Quản lý nhiều kênh social cùng lúc chưa bao giờ dễ dàng đến thế. Schedulify là công cụ không thể thiếu cho team marketing của chúng tôi.",
    author: "Lê Văn C",
    role: "CEO",
    company: "Startup ABC",
  },
];

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const renderCTAButtons = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
    >
      {!isAuthenticated ? (
        <>
          <Link href="/auth/register">
            <Button
              size="lg"
              className="h-12 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Dùng thử miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-lg group border-2 hover:bg-accent/10 hover:border-accent text-foreground transition-all duration-300 hover:scale-105"
            >
              Đăng nhập
              <ArrowRight className="ml-2 h-4 w-4 group-hover:text-accent transition-colors" />
            </Button>
          </Link>
        </>
      ) : (
        <Link href="/dashboard">
          <Button
            size="lg"
            className="h-12 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            Vào Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      )}
    </motion.div>
  );

  const renderCTASection = () => (
    <section className="relative border-y bg-gradient-to-b from-muted/50 via-background to-muted/50 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-[2px]">
          <div className="relative rounded-3xl bg-gradient-to-b from-background via-background/95 to-background/90 px-8 py-16 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 md:px-12 lg:px-16 border border-accent/10">
            <div className="relative z-10 text-center">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Bắt đầu tối ưu social media của bạn
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/80">
                {isAuthenticated 
                  ? "Quản lý mạng xã hội của bạn ngay bây giờ"
                  : "Đăng ký ngay hôm nay và trải nghiệm sức mạnh của Schedulify"}
              </p>
              <div className="mt-10">
                <Link href={isAuthenticated ? "/dashboard" : "/auth/register"}>
                  <Button
                    size="lg"
                    className="h-12 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                  >
                    {isAuthenticated ? "Vào Dashboard" : "Dùng thử miễn phí"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl" />
    </section>
  );

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 lg:pt-40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 dark:from-foreground dark:to-foreground/80"
            >
              Quản lý mạng xã hội{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block bg-gradient-to-r from-primary/90 to-accent/90 bg-clip-text text-transparent"
              >
                thông minh hơn
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-xl text-foreground/80 md:text-2xl max-w-2xl mx-auto"
            >
              Tự động hóa và tối ưu việc đăng bài đa kênh. Tiết kiệm thời gian và
              tăng hiệu quả với công nghệ AI.
            </motion.p>
            {renderCTAButtons()}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex items-center justify-center gap-8 text-foreground"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9/5 đánh giá</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">1000+ khách hàng</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 scale-[0.8] bg-gradient-to-r from-primary/20 via-accent/40 to-secondary/20 blur-3xl" />
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border bg-background/95 p-8 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
              Tính năng nổi bật
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Tất cả công cụ bạn cần
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Quản lý mạng xã hội chưa bao giờ dễ dàng đến thế
            </p>
          </motion.div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-8 shadow-sm hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-3 text-primary ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                  <div className="mt-6 flex items-center text-primary opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">Tìm hiểu thêm</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl animate-pulse" />
        <div className="absolute left-0 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/5 to-transparent blur-3xl animate-pulse" />
      </section>

      {/* Platforms Section */}
      <section className="relative border-y bg-muted/30 py-20 md:py-32">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
              Tích hợp đa nền tảng
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Hỗ trợ đa nền tảng
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Kết nối và quản lý tất cả các kênh xã hội trong một nền tảng duy nhất
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-12"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group flex flex-col items-center gap-4"
              >
                <div className="relative rounded-full bg-gradient-to-b from-muted/80 to-muted/50 p-6 transition-all group-hover:shadow-xl group-hover:shadow-primary/20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <platform.icon className="relative h-12 w-12 text-foreground transition-colors group-hover:text-primary" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">{platform.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-2xl animate-pulse" />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">
              Bảng giá
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Đơn giản và minh bạch
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Chọn gói phù hợp với nhu cầu của bạn
            </p>
          </motion.div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-8 shadow-sm transition-all hover:shadow-xl md:p-10 ${
                  plan.name === "Pro" ? "border-2 border-primary/20" : ""
                }`}
              >
                {plan.name === "Pro" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <Badge variant="secondary" className="shadow-sm">
                      Phổ biến nhất
                    </Badge>
                  </motion.div>
                )}
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                    <div className="mt-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
                        <span className="ml-1 text-sm text-foreground/70">/tháng</span>
                      </div>
                      <p className="mt-2 text-sm text-foreground/70">{plan.description}</p>
                    </div>
                  </div>
                  <div className="mt-8 border-t pt-8 flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="flex-shrink-0 rounded-full bg-primary/20 p-1">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <span className="ml-3 text-foreground/90">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-8 border-t">
                    <Button
                      className={`w-full h-12 text-lg ${
                        plan.name === "Pro"
                          ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                          : plan.name === "Enterprise"
                          ? "bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-primary-foreground"
                          : "bg-background text-foreground hover:bg-accent/10 border-2 hover:border-accent"
                      } transition-all duration-300 hover:scale-105`}
                      size="lg"
                    >
                      {plan.name === "Free" 
                        ? "Dùng thử miễn phí" 
                        : plan.name === "Enterprise"
                        ? "Liên hệ với chúng tôi"
                        : "Nâng cấp ngay"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl animate-pulse" />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative border-y bg-gradient-to-b from-muted/50 via-background to-muted/50 py-20 md:py-32">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
              FAQ
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Những thắc mắc phổ biến về Schedulify
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-b from-background via-background/95 to-background/90 p-6 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-accent/10 hover:border-accent/20 transition-all duration-300"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2.5 text-primary group-hover:bg-primary/20 transition-colors">
                    <faq.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-foreground/80"
                >
                  {faq.answer}
                </motion.div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-2xl animate-pulse" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
              Testimonials
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Những đánh giá từ khách hàng đang sử dụng Schedulify
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="relative">
                  <p className="text-lg text-foreground/80">
                    &quot;{testimonial.content}&quot;
                  </p>
                </blockquote>
                <div className="mt-8 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-foreground/70">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="text-sm text-foreground/70">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      </section>

      {renderCTASection()}
    </MarketingLayout>
  );
}
