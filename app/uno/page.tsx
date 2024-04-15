import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Megaphone, Search, SquareCheckBig, ToggleLeft } from "lucide-react";

const PageUno = () => {
    return (
        <div className="h-screen w-screen bg-[#f4f4f7] ">
            <div className="flex flex-row justify-between px-8 py-2 ">
                <div >
                    <h1 className="h-full content-center">MyLogo</h1>
                </div>
                <div className="grow px-8">
                    <Input className="rounded-full px-8" placeholder="Search..." />
                </div>
                <div className="flex flex-row justify-center space-x-4 ">
                    <div className="h-full content-center rounded-full bg-white p-1 px-2">
                        <Megaphone className="w-6 h-6 " />
                    </div>
                    <div className="h-full content-center rounded-full bg-white p-1 px-2">
                        <SquareCheckBig className="w-6 h-6 " />
                    </div>
                    <div className="h-full content-center">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>

            <div className="b rounded-sm p-4 flex flex-row space-x-8  justify-center h-full">
                <div className="flex flex-col space-y-8 h-full">
                    <div className="flex flex-row justify-between">
                        <div className="h-full content-center">
                            <h1 className="font-semibold text-2xl">Titlulo </h1>
                        </div>
                        <div className="flex flex-row space-x-2 justify-end">
                            <Button variant="outline" >Down <a className="text-red-400">-6 %</a> </Button>
                            <Button variant="outline" >Up <a className="text-green-400">+7 %</a> </Button>
                            <Button variant="outline" ><ToggleLeft /></Button>
                        </div>
                    </div>
                    <div className=" flex flex-row space-x-8">
                        <div className=" ">
                            <Card className="w-96 h-48">
                                <CardHeader>
                                    <CardTitle> Card Title</CardTitle>
                                    <CardDescription> Card Description  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    Body
                                </CardContent>
                            </Card>
                        </div>
                        <div className=" ">
                            <Card className="w-96 h-48">
                                <CardHeader>
                                    <CardTitle> Card Title</CardTitle>
                                    <CardDescription> Card Description  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    Body
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className=" ">
                            <Card className="w-full h-48">
                                <CardHeader>
                                    <CardTitle> Card Title</CardTitle>
                                    <CardDescription> Card Description  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    Body
                                </CardContent>
                            </Card>
                        </div>
                </div>
            
        
                <div className=" h-full ">
                            <Card className="w-48 h-auto">
                                <CardHeader>
                                    <CardTitle> Card Title</CardTitle>
                                    <CardDescription> Card Description  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    Body
                                </CardContent>
                            </Card>
                        </div>
                </div>
            </div>

    );
}

export default PageUno;