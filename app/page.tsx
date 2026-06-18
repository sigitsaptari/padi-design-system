import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/textfield"
import { Chip } from "@/components/ui/chip"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="flex flex-col items-center mb-16 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          PaDi Design System
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buttons Section */}
        <section className="space-y-6 md:col-span-2">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
            <p className="text-sm text-muted-foreground">Button states and sizes based on Figma design.</p>
          </div>
          <div className="flex flex-wrap gap-12 p-8 bg-white border rounded-2">

            {/* Solid Group */}
            <div className="grid grid-cols-[auto_auto_auto] gap-x-8 gap-y-4 w-max">
              {/* Solid Default */}
              <Button variant="primary" size="default">Button</Button>
              <Button variant="primary" size="sm">Button</Button>
              <Button variant="primary" size="lg">Button</Button>

              {/* Solid Hover */}
              <Button className="bg-tosca-600 text-white" size="default">Button</Button>
              <Button className="bg-tosca-600 text-white" size="sm">Button</Button>
              <Button className="bg-tosca-600 text-white" size="lg">Button</Button>

              {/* Solid Pressed */}
              <Button className="bg-tosca-700 text-white" size="default">Button</Button>
              <Button className="bg-tosca-700 text-white" size="sm">Button</Button>
              <Button className="bg-tosca-700 text-white" size="lg">Button</Button>

              {/* Solid Focus */}
              <Button className="bg-tosca-500 text-white border-[2px] border-tosca-700 ring-0 ring-offset-0 focus-visible:ring-0" size="default">Button</Button>
              <Button className="bg-tosca-500 text-white border-[2px] border-tosca-700 ring-0 ring-offset-0 focus-visible:ring-0" size="sm">Button</Button>
              <Button className="bg-tosca-500 text-white border-[2px] border-tosca-700 ring-0 ring-offset-0 focus-visible:ring-0" size="lg">Button</Button>

              {/* Solid Disabled */}
              <Button disabled variant="primary" size="default">Button</Button>
              <Button disabled variant="primary" size="sm">Button</Button>
              <Button disabled variant="primary" size="lg">Button</Button>
            </div>

            {/* Outline Group */}
            <div className="grid grid-cols-[auto_auto_auto] gap-x-8 gap-y-4 w-max">
              {/* Outline Default */}
              <Button variant="tertiary-outline" size="default">Button</Button>
              <Button variant="tertiary-outline" size="sm">Button</Button>
              <Button variant="tertiary-outline" size="lg">Button</Button>

              {/* Outline Hover */}
              <Button className="border border-gray-600 text-gray-600 bg-transparent" size="default">Button</Button>
              <Button className="border border-gray-600 text-gray-600 bg-transparent" size="sm">Button</Button>
              <Button className="border border-gray-600 text-gray-600 bg-transparent" size="lg">Button</Button>

              {/* Outline Pressed */}
              <Button className="border border-gray-700 text-gray-700 bg-transparent" size="default">Button</Button>
              <Button className="border border-gray-700 text-gray-700 bg-transparent" size="sm">Button</Button>
              <Button className="border border-gray-700 text-gray-700 bg-transparent" size="lg">Button</Button>

              {/* Outline Focus */}
              <Button className="border-[2px] border-gray-500 text-gray-500 bg-transparent ring-0 ring-offset-0 focus-visible:ring-0" size="default">Button</Button>
              <Button className="border-[2px] border-gray-500 text-gray-500 bg-transparent ring-0 ring-offset-0 focus-visible:ring-0" size="sm">Button</Button>
              <Button className="border-[2px] border-gray-500 text-gray-500 bg-transparent ring-0 ring-offset-0 focus-visible:ring-0" size="lg">Button</Button>

              {/* Outline Disabled */}
              <Button disabled variant="tertiary-outline" size="default">Button</Button>
              <Button disabled variant="tertiary-outline" size="sm">Button</Button>
              <Button disabled variant="tertiary-outline" size="lg">Button</Button>
            </div>
          </div>
        </section>

        {/* TextFields Section */}
        <section className="space-y-6 md:col-span-2">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">TextFields</h2>
            <p className="text-sm text-muted-foreground">TextField states and sizes based on Figma design.</p>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] gap-x-8 gap-y-6 w-max p-8 bg-white border rounded-2 mx-auto md:mx-0">
            {/* Default */}
            <TextField label="Label" size="lg" placeholder="placeholder" />
            <TextField label="Label" size="md" placeholder="placeholder" />
            <TextField label="Label" size="sm" placeholder="placeholder" />

            {/* Hover */}
            <TextField label="Label" size="lg" state="default" className="border-tosca-500" placeholder="placeholder" />
            <TextField label="Label" size="md" state="default" className="border-tosca-500" placeholder="placeholder" />
            <TextField label="Label" size="sm" state="default" className="border-tosca-500" placeholder="placeholder" />

            {/* Focussed */}
            <TextField label="Label" size="lg" state="default" className="border-tosca-500 ring-2 ring-tosca-50" placeholder="placeholder" />
            <TextField label="Label" size="md" state="default" className="border-tosca-500 ring-2 ring-tosca-50" placeholder="placeholder" />
            <TextField label="Label" size="sm" state="default" className="border-tosca-500 ring-2 ring-tosca-50" placeholder="placeholder" />

            {/* Filled */}
            <TextField label="Label" size="lg" state="filled" value="placeholder" readOnly />
            <TextField label="Label" size="md" state="filled" value="placeholder" readOnly />
            <TextField label="Label" size="sm" state="filled" value="placeholder" readOnly />

            {/* Error */}
            <TextField label="Label" size="lg" state="error" hint="Information" placeholder="placeholder" />
            <TextField label="Label" size="md" state="error" hint="Information" placeholder="placeholder" />
            <TextField label="Label" size="sm" state="error" hint="Information" placeholder="placeholder" />

            {/* Success */}
            <TextField label="Label" size="lg" state="success" hint="Information" placeholder="placeholder" />
            <TextField label="Label" size="md" state="success" hint="Information" placeholder="placeholder" />
            <TextField label="Label" size="sm" state="success" hint="Information" placeholder="placeholder" />

            {/* Disabled */}
            <TextField label="Label" size="lg" placeholder="placeholder" disabled />
            <TextField label="Label" size="md" placeholder="placeholder" disabled />
            <TextField label="Label" size="sm" placeholder="placeholder" disabled />

            {/* With Prefix/Suffix/Icons */}
            <div className="col-span-3 h-4"></div>
            <TextField label="Prefix & Suffix" size="lg" prefixText="Rp" suffixText=".00" placeholder="0" />
            <TextField label="Prefix & Suffix" size="md" prefixText="Rp" suffixText=".00" placeholder="0" />
            <TextField label="Prefix & Suffix" size="sm" prefixText="Rp" suffixText=".00" placeholder="0" />
          </div>
        </section>

        {/* Chips Section */}
        <section className="space-y-6">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Chips</h2>
            <p className="text-sm text-muted-foreground">Color variants from the design system.</p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <Chip variant="soft" color="tosca">Soft Tosca</Chip>
              <Chip variant="soft" color="green">Soft Green</Chip>
              <Chip variant="soft" color="dark-blue">Soft Dark Blue</Chip>
              <Chip variant="soft" color="gray">Soft Gray</Chip>
              <Chip variant="soft" color="blue">Soft Blue</Chip>
              <Chip variant="soft" color="orange">Soft Orange</Chip>
              <Chip variant="soft" color="red">Soft Red</Chip>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Chip variant="solid" color="tosca">Solid Tosca</Chip>
              <Chip variant="solid" color="green">Solid Green</Chip>
              <Chip variant="solid" color="dark-blue">Solid Dark Blue</Chip>
              <Chip variant="solid" color="gray">Solid Gray</Chip>
              <Chip variant="solid" color="blue">Solid Blue</Chip>
              <Chip variant="solid" color="orange">Solid Orange</Chip>
              <Chip variant="solid" color="red">Solid Red</Chip>
            </div>
          </div>
        </section>


      </div>
    </main>
  )
}
