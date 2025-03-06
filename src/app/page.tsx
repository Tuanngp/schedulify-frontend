import Image from "next/image";
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
  ChevronDown,
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
      "3 kênh xã hội",
      "10 bài đăng/tháng",
      "Phân tích cơ bản",
      "Email support",
    ],
  },
  {
    name: "Premium",
    price: "199.000",
    description: "Cho doanh nghiệp chuyên nghiệp",
    features: [
      "Không giới hạn kênh xã hội",
      "Không giới hạn bài đăng",
      "Phân tích chuyên sâu",
      "Hỗ trợ 24/7",
      "API tích hợp",
      "Quản lý team",
    ],
  },
];

const faqs = [
  {
    question: "Schedulify có những tính năng gì nổi bật?",
    answer:
      "Schedulify cung cấp nhiều tính năng như lên lịch đăng bài tự động, phân tích hiệu suất, quản lý tương tác, và đề xuất thời gian đăng tối ưu bằng AI.",
  },
  {
    question: "Tôi có thể dùng thử miễn phí không?",
    answer:
      "Có, bạn có thể đăng ký tài khoản Free để dùng thử các tính năng cơ bản của Schedulify.",
  },
  {
    question: "Làm sao để nâng cấp lên Premium?",
    answer:
      "Bạn có thể dễ dàng nâng cấp lên Premium trong phần Cài đặt > Gói dịch vụ của tài khoản.",
  },
  {
    question: "Schedulify hỗ trợ những nền tảng nào?",
    answer:
      "Hiện tại Schedulify hỗ trợ Facebook, Instagram, Twitter, LinkedIn và YouTube.",
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
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 lg:pt-40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 dark:from-foreground dark:to-foreground/80">
              Quản lý mạng xã hội{" "}
              <span className="inline-block bg-gradient-to-r from-primary/90 to-accent/90 bg-clip-text text-transparent">
                thông minh hơn
              </span>
            </h1>
            <p className="mt-6 text-xl text-foreground/80 md:text-2xl max-w-2xl mx-auto">
              Tự động hóa và tối ưu việc đăng bài đa kênh. Tiết kiệm thời gian và
              tăng hiệu quả với công nghệ AI.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="h-12 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25">
                  Dùng thử miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg group border-2 hover:bg-accent/10 hover:border-accent text-foreground">
                <Play className="mr-2 h-4 w-4 group-hover:text-accent transition-colors" />
                Xem demo
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-foreground">
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
            </div>
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
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
              Tính năng nổi bật
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Tất cả công cụ bạn cần
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Quản lý mạng xã hội chưa bao giờ dễ dàng đến thế
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-3 text-primary ring-1 ring-primary/20">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
        <div className="absolute left-0 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/5 to-transparent blur-3xl" />
      </section>

      {/* Platforms Section */}
      <section className="relative border-y bg-muted/30 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
              Tích hợp đa nền tảng
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Hỗ trợ đa nền tảng
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Kết nối và quản lý tất cả các kênh xã hội trong một nền tảng duy nhất
            </p>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group flex flex-col items-center gap-4"
              >
                <div className="relative rounded-full bg-gradient-to-b from-muted/80 to-muted/50 p-6 transition-all group-hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <platform.icon className="relative h-12 w-12 text-foreground transition-colors group-hover:text-primary" />
                </div>
                <span className="font-medium text-foreground">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl" />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">
              Bảng giá
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Đơn giản và minh bạch
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Chọn gói phù hợp với nhu cầu của bạn
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-8 shadow-sm transition-all hover:shadow-lg md:p-10"
              >
                {plan.name === "Premium" && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary" className="shadow-sm">
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
                      <span className="text-sm text-foreground/70">/tháng</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/70">{plan.description}</p>
                  </div>
                </div>
                <div className="mt-8 border-t pt-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="flex-shrink-0 rounded-full bg-primary/20 p-1">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <span className="ml-3 text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    className={`w-full ${
                      plan.name === "Premium"
                        ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                        : "bg-background text-foreground hover:bg-accent/10 border-2 hover:border-accent"
                    }`}
                    size="lg"
                  >
                    {plan.name === "Free" ? "Dùng thử miễn phí" : "Nâng cấp ngay"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative border-y bg-gradient-to-b from-muted/50 via-background to-muted/50 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
              FAQ
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Những thắc mắc phổ biến về Schedulify
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-gradient-to-b from-background via-background/95 to-background/90 p-8 shadow-xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 md:p-10 border border-accent/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-accent/20">
                  <AccordionTrigger className="text-left hover:text-accent text-foreground py-6">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-2xl" />
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
                    "{testimonial.content}"
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

      {/* CTA Section */}
      <section className="relative border-y bg-gradient-to-b from-muted/50 via-background to-muted/50 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-[2px]">
            <div className="relative rounded-3xl bg-gradient-to-b from-background via-background/95 to-background/90 px-8 py-16 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 md:px-12 lg:px-16 border border-accent/10">
              <div className="relative z-10 text-center">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Bắt đầu tối ưu social media của bạn
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/80">
                  Đăng ký ngay hôm nay và trải nghiệm sức mạnh của Schedulify
                </p>
                <div className="mt-10">
                  <Link href="/auth/signup">
                    <Button
                      size="lg"
                      className="h-12 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                    >
                      Dùng thử miễn phí
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
    </MarketingLayout>
  );
}
