import { useTranslations } from 'next-intl';

interface DefinitionTerm {
  [key: string]: string;
}

interface InterpretationRule {
  text: string;
}

interface ContractClause {
  text: string;
}

export default function UkPracticeTcsPage() {
  const t = useTranslations('UKPracticeTCs');

  return (
    <section className="container mx-auto pt-10 pb-40 text-lg">
      <div className="col-md-8 m-auto">
        <h1 className="sub-heading mb-6">
          <span className="text-primary">{t('title.prefix')}</span> {t('title.suffix')}
        </h1>
        <p className="mb-4 text-primary">
          <strong>{t('subtitle')}</strong>
        </p>
        <h2 className="sub-heading text-primary mb-4 text-2xl">{t('sections.interpretation.title')}</h2>
        <p className="mb-4">
          <b>{t('sections.interpretation.intro')}</b>
        </p>
        <p className="mb-4">{t('sections.interpretation.definitions.title')}</p>
        {Object.entries(t.raw('sections.interpretation.definitions.terms') as DefinitionTerm).map(([key, value]) => (
          <div key={key}>
            <b>{key}</b>
            <span>: {value}</span>
            <br />
          </div>
        ))}
        <p className="mb-4">{t('sections.interpretation.interpretation_rules.title')}</p>
        <ol>
          {(t.raw('sections.interpretation.interpretation_rules.rules') as InterpretationRule[]).map((rule, index) => (
            <li key={index}>
              <span>{rule.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.basis_of_contract.title')}</h2>
        <ol>
          {(t.raw('sections.basis_of_contract.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.supply_of_services.title')}</h2>
        <ol>
          {(t.raw('sections.supply_of_services.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.customer_obligations.title')}</h2>
        <ol>
          {(t.raw('sections.customer_obligations.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.payment_terms.title')}</h2>
        <ol>
          {(t.raw('sections.payment_terms.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.term_and_termination.title')}</h2>
        <ol>
          {(t.raw('sections.term_and_termination.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.intellectual_property.title')}</h2>
        <ol>
          {(t.raw('sections.intellectual_property.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.pet_owner_terms.title')}</h2>
        <ol>
          {(t.raw('sections.pet_owner_terms.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.data_protection.title')}</h2>
        <ol>
          {(t.raw('sections.data_protection.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.liability.title')}</h2>
        <ol>
          {(t.raw('sections.liability.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.confidentiality.title')}</h2>
        <ol>
          {(t.raw('sections.confidentiality.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-heading text-primary my-4 text-2xl">{t('sections.general.title')}</h2>
        <ol>
          {(t.raw('sections.general.clauses') as ContractClause[]).map((clause, index) => (
            <li key={index}>
              <span>{clause.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
