import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HTMLInputTypeAttribute } from "react"

interface InputWithLabelProps {
    label: string
    placeholder: string
    id?: string
    type?: HTMLInputTypeAttribute
}

export function InputWithLabel(props: InputWithLabelProps) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="body2 text-navy text-start">{props.label}</Label>
            <Input id={props.id} type={props.type} placeholder={props.placeholder} className="h-12" />
        </div>
    )
}
