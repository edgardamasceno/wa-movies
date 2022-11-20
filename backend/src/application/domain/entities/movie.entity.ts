import { VirtualColumn } from 'src/application/infraestructure/database/typeorm/decorators/virtual-column.decorator';
import { Entity, Column, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class Movie {
  @PrimaryColumn()
  id: string;

  @Column()
  @Index({ fulltext: true })
  title: string;

  @Column({ name: 'original_title' })
  @Index({ fulltext: true })
  originalTitle: string;

  @Column({ name: 'original_title_romanized' })
  @Index({ fulltext: true })
  originalTitleRomanized: string;

  @Column()
  @Index({ fulltext: true })
  director: string;

  @Column()
  @Index({ fulltext: true })
  producer: string;

  @Column()
  @Index({ fulltext: true })
  description: string;

  @Column()
  @Index({ fulltext: true })
  duration: number;

  @Column()
  @Index({ fulltext: true })
  year: string;

  @VirtualColumn()
  score?: number;
}
