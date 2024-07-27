import { DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DialogTitle } from "@radix-ui/react-dialog";

// export interface OrderDetailsProps {}

export function OrderDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 1822fdf4df484</DialogTitle>
                <DialogDescription>Destalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">
                                        Pendente
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">
                                        Gabriel Willms
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">
                                        (41) 99999-9999
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">E-Mail</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">
                                        willms75@gmail.com
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">
                                        há 3 minutos
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableHead>Produto</TableHead>
                        <TableHead className="text-right">Qtd.</TableHead>
                        <TableHead className="text-right">Preço</TableHead>
                        <TableHead className="text-right">Subtotal</TableHead>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Pepperoni Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 59,90</TableCell>
                            <TableCell className="text-right">R$ 119,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Calabresa Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 50,90</TableCell>
                            <TableCell className="text-right">R$ 101,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Picanha Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 89,90</TableCell>
                            <TableCell className="text-right">R$ 179,80</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3} className="text-right">Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">R$ 401,40</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}