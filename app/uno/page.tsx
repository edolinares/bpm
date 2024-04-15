import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, Megaphone, Pickaxe, Search, Server, Spade, SquareCheckBig, Star, ToggleLeft, TrafficCone, TreePalm } from "lucide-react";

const PageUno = () => {
    return (
        <div className="h-screen w-screen bg-[#f4f4f7] ">
            <div className="flex flex-row justify-between px-8 py-2 ">
                <div >
                    <h1 className="h-full content-center text-3xl">MyLogo</h1>
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


            <div className="absolute bg-white inset-y-0 left-20 h-96 rounded-full top-1/2  transform -translate-x-1/2 -translate-y-1/2 p-1 border">
                <div className="flex flex-col space-y-4 place-items-center p-1">
                    <div className="rounded-full bg-[#0b3fff] p-1.5">
                        <Home color="white" className="w-6 h-6" />
                    </div>
                    <div className="rounded-full hover:bg-[#0b3fff]/50 p-1.5">
                        <TreePalm  className="w-6 h-6 stroke-[#35353b] hover:stroke-white " />
                    </div>
                    <div className="rounded-full hover:bg-[#0b3fff]/50 p-1.5">
                        <TrafficCone   className="w-6 h-6 stroke-[#35353b] hover:stroke-white " />
                    </div>
                    <div className="rounded-full hover:bg-[#0b3fff]/50 p-1.5">
                        <Star  className="w-6 h-6 stroke-[#35353b] hover:stroke-white "  />
                    </div>
                    <div className="rounded-full hover:bg-[#0b3fff]/50 p-1.5">
                        <Spade className="w-6 h-6 stroke-[#35353b] hover:stroke-white " />
                    </div>
                    <div className="rounded-full hover:bg-[#0b3fff]/50 p-1.5">
                        <Server   className="w-6 h-6 stroke-[#35353b] hover:stroke-white " />
                    </div>
                    <div className="rounded-full hover:bg-[#0b3fff]/50 p-1.5">
                        <Pickaxe   className="w-6 h-6 stroke-[#35353b] hover:stroke-white " />
                    </div>
                </div>

            </div>







            </div>

    );
}

export default PageUno;