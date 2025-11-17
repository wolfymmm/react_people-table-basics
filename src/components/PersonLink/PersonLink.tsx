import React from 'react';
import { Person } from '../../types';

interface PersonLinkProps {
  person?: Person | null;
  'data-cy'?: string;
}

export const PersonLink: React.FC<PersonLinkProps> = ({
  person,
  'data-cy': dataCy,
}) => {
  if (!person) {
    return null;
  }

  return (
    <a
      href={`#/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
      data-cy={dataCy}
    >
      {person.name}
    </a>
  );
};
