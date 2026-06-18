import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="flex flex-col items-center mb-16 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          PaDi Design System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A showcase of our core components built with React, Next.js, and Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buttons Section */}
        <section className="space-y-6">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
            <p className="text-sm text-muted-foreground">Various button styles and states.</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default Size</Button>
            <Button size="lg">Large Size</Button>
            <Button size="icon">♥</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button disabled>Disabled Default</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-6">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Inputs</h2>
            <p className="text-sm text-muted-foreground">Standard form input fields.</p>
          </div>
          <div className="space-y-4 max-w-sm">
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            <Input type="text" placeholder="Disabled input" disabled />
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Subscribe" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Badges</h2>
            <p className="text-sm text-muted-foreground">Small status indicators.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6 md:col-span-2">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Cards</h2>
            <p className="text-sm text-muted-foreground">Container components for grouping content.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none">
              <CardHeader>
                <CardTitle>Premium Feature</CardTitle>
                <CardDescription className="text-primary-foreground/80">Upgrade your account to unlock this feature.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">This is an example of a themed card using the primary color palette.</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Upgrade Now</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
