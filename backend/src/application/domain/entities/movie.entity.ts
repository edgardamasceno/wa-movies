import { type } from 'os';
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

  @Column({ name: 'original_title_romanised' })
  @Index({ fulltext: true })
  originalTitleRomanised: string;

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
  duration: number;

  @Column({ type: 'int' })
  @Index({ fulltext: true })
  year: number;

  @Column()
  cover: string;

  @Column()
  banner: string;

  @VirtualColumn()
  score?: number;
}
