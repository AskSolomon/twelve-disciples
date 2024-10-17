import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const disciples = [
  { name: "Peter", description: "Is also known as Simon Peter, he was a fisherman and one of Jesus' closest disciples." },
  { name: "Andrew", description: "Is Peter's brother and also a fisherman. He was the first disciple Jesus called." },
  { name: "James", description: "Is Son of Zebedee, he was part of Jesus' inner circle along with Peter and John." },
  { name: "John", description: "Is Brother of James and known as the 'beloved disciple'. He wrote the Gospel of John." },
  { name: "Philip", description: "Is from Bethsaida, he brought Nathanael to Jesus." },
  { name: "Bartholomew", description: "Is also known as Nathanael, he was brought to Jesus by Philip." },
  { name: "Matthew", description: "Is A tax collector who became a disciple. He wrote the Gospel of Matthew." },
  { name: "Thomas", description: "Is Known as 'Doubting Thomas' for his initial disbelief in Jesus' resurrection." },
  { name: "James", description: "Is Son of Alphaeus, also known as James the Less." },
  { name: "Thaddaeus", description: "Is also known as Jude or Lebbaeus, son of James." },
  { name: "Simon", description: "Is called the Zealot, he was a member of a Jewish nationalist sect." },
  { name: "Judas Iscariot", description: "Is the disciple who betrayed Jesus. He was later replaced by Matthias." },
];

const DisciplesGrid = () => {
  const [selectedDisciple, setSelectedDisciple] = useState(null);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">The 12 Disciples of Jesus</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {disciples.map((disciple, index) => (
          <Card 
            key={index} 
            className="group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => setSelectedDisciple(disciple)}
          >
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${disciple.name}/300/300`} 
                  alt={disciple.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold text-center">{disciple.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedDisciple} onOpenChange={() => setSelectedDisciple(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedDisciple?.name}</DialogTitle>
            <DialogDescription>{selectedDisciple?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DisciplesGrid;
