import React from 'react'
import BlogData from "@/constants/blogs.json";
import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"

export interface BlogPost {
    title: string;
    author: string;
    date: string;
    description: string;
    wordCount?: number;
    content?: string;
}

const BlogPage = () => {
    return (<section className="mx-auto max-w-screen-lg p-4 md:p-8">
        <div className="gap-4 flex flex-col">
            {BlogData.map(({id, date, description, author, title}) => (
                <BlogCard key={id} title={title} author={author} date={date}
                          description={description}/>))}
        </div>
    </section>)
}
export default BlogPage

const BlogCard = ({title, author, date, description}: BlogPost) => {
    return (<Card className="-space-y-6">
        <CardHeader>
            <CardTitle
                className="text-[24px] lg:text-[32px] md:text-[42px] font-normal font-abril_fatface">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="lg:text-[18px] font-bird_eye md:text-[20px] text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="w-full pt-4 flex justify-between items-center">
            <p className="font-bold font-sans text-muted-foreground text-[12px] md:text-[16px] lg:text-[14px]">{date}</p>
            <p className="font-bold font-bird_eye text-muted-foreground text-[12px] md:text-[16px] lg:text-[14px]">{author}</p>
        </CardFooter>
    </Card>)
}