"""Adds fields and tool_name to documents

Revision ID: 6553b76de6ca
Revises: 2853273872ca
Create Date: 2024-05-07 11:23:19.581035

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "6553b76de6ca"
down_revision: Union[str, None] = "2853273872ca"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("documents", sa.Column("fields", sa.JSON(), nullable=True))
    op.add_column("documents", sa.Column("tool_name", sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("documents", "tool_name")
    op.drop_column("documents", "fields")
    # ### end Alembic commands ###
