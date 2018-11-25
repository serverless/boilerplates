using System;

namespace DotNetServerless.Domain.Responses
{
  public class ItemResponse
  {
    public Guid Id { get; set; }
    public string Code { get; set; }
    public string Description { get; set; }
    public bool IsChecked { get; set; }
  }
}
