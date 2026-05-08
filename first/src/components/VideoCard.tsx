
import { useState } from 'react';
import Link from 'next/link';

export function VideoCard(props: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href="/watch" className="block text-inherit no-underline">
            <div
                className="p-3 cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
                    {isHovered ? (
                        <video
                            src="/2vid.mp4"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                        />
                    ) : (
                        <img
                            src={props.image}
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            alt={props.title}
                        />
                    )}
                </div>
                <div className="grid grid-cols-12 pt-3">
                    <div className="col-span-2">
                        <img className="rounded-full w-10 h-10 object-cover mt-1" src={props.thumbImage} alt={props.author} />
                    </div>
                    <div className="col-span-10 pl-2">
                        <div className="font-semibold text-gray-100 line-clamp-2">
                            {props.title}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">
                            {props.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                            {props.views} • {props.timestamp}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
