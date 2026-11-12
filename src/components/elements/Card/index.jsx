import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props) => {
    const { title, description, image, icon } = props
    return (
        <div className="group relative w-full p-6 rounded-xl card-panel card-panel-hover overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 sm:mb-0">
                {icon && (
                    <FontAwesomeIcon
                        icon={icon.props.icon}
                        className="text-blue-600 text-lg align-self-start mr-2 sm:mr-0"
                    />
                )}
                <h4 className="text-lg font-semibold text-slate-900 sm:text-left flex-1">
                    {title}
                </h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    )
}