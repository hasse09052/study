require 'minitest/autorun'
require_relative '../lib/convert_hash_syntax'

class ConvertHashSyntaxTest < Minitest::Test
  def test_convert_hash_syntax
    old_syntax = <<~TEXT
    {
      :name => 'Alice',
      :age=> 20,
      :gender  =>  :female
    }
    TEXT

    expacted = <<~TEXT
    {
      name: 'Alice',
      age: 20,
      gender: :female
    }
    TEXT

    assert_equal expacted, convert_hash_syntax(old_syntax)
  end
end